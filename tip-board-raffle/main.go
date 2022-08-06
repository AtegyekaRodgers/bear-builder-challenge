package main

import (
  "fmt"
  "log"
  "flag"
  "embed"
  "io/fs"
  "strings"
  "net/http"
  "encoding/json"
  "github.com/gorilla/mux"
)

//go:embed pages/*
var pages embed.FS

func resourceNotFound(w http.ResponseWriter, r *http.Request) {
  json.NewEncoder(w).Encode(struct{Success string}{Success: "Page not found !"})
}

func getRouter() *mux.Router {
  website, _ := fs.Sub(pages, "pages")

  router := mux.NewRouter()
  //pages
  router.PathPrefix("/home").Handler(http.StripPrefix("/home/", http.FileServer(http.FS(website))) ).Methods("GET")
  router.PathPrefix("/").Handler( http.FileServer(http.FS(website)) ).Methods("GET")
  //Not found
  router.NotFoundHandler = http.HandlerFunc(resourceNotFound)

  return router
}

func main() {
  baseAddress := ":4900" 
  addr := flag.String("addr", baseAddress, "Web server address") 
  flag.Parse()
  fmt.Println("Server listening on port: "+(strings.Split(baseAddress,":")[1])) 
  log.Fatal(http.ListenAndServe(*addr, getRouter()))
}


