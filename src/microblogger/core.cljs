(ns microblogger.core
  (:require [reagent.core :as r]))

(defn app
  []
  [:div.container
   [:div.topbar "topbar"]
   [:div.main "main"]
   [:div.footer "footer"]])

(defn ^:export main
  []
  (r/render
   [app] 
   (.getElementById js/document "app")))
