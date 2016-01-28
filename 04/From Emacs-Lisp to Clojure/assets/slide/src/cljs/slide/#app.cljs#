(ns slide.app
  (:require [hipo.core :as hipo]))

(defn- add-element-to-id
  "Add hiccup element to id."
  [id body]
  (let [dom (.getElementById js/document id)
        el (hipo/create body)]
    ;; add to dom
    (set! (.-innerHTML dom) (.-innerHTML el))))

(defn- add-image-with-link
  [type id child]
  (letfn [(ilink [{:keys [image url]}]
            [:div.col-xs-3
             [:a.thumbnail {:href url :target "_blank"}
              [:img.img-responsive
               {:src
                (str (case type
                       :cljs "picts/books-cljs"
                       :clj "picts/books-clj"
                       "picts")
                     "/" image)}]]])]
    (add-element-to-id
     id
     [:div.row (for [c child] (ilink c))])))

(defn clojure-books-1
  []
  (add-image-with-link
   :clj "cljbook1"
   [{:image "Practical Clojure.png" :url "http://amzn.com/1430272317"}
    {:image "Programming Clojure.png" :url "http://amzn.com/1934356867"}
    {:image "The Joy of Clojure.png" :url "http://amzn.com/1617291412"}
    {:image "Clojure Cookbook.png" :url "http://amzn.com/1449366171"}
    {:image "Living Clojure.png" :url "http://amzn.com/1491909048"}
    {:image "Clojure Programming.png" :url "http://amzn.com/1449394701"}
    {:image "Clojure for the Brave and True.png" :url "http://www.braveclojure.com/"}
    {:image "Clojure in Action.png" :url "http://amzn.com/1617291528"}]))

(defn clojure-books-2
  []
  (add-image-with-link
   :clj "cljbook2"
   [{:image "Clojure Applied.png" :url "http://amzn.com/1680500740"}
    {:image "Mastering Clojure Macros.png" :url "http://amzn.com/1941222226"}
    {:image "Clojure Data Structures and Algorithms Cookbook.png" :url "http://amzn.com/1785281453"}
    {:image "Clojure High Performance Programming.png" :url "http://amzn.com/1785283642"}
    {:image "Clojure Recipes.png" :url "http://amzn.com/0321927737"}
    {:image "Clojure Reactive Programming.png" :url "http://amzn.com/1783986662"}]))

(defn clojure-books-3
  []
  (add-image-with-link
   :clj "cljbook3"
   [{:image "Clojure for Machine Learning.png" :url "http://amzn.com/1783284358"}
    {:image "Clojure for Finance.png" :url "http://amzn.com/1785289284"}
    {:image "Clojure for Data Science.png" :url "http://amzn.com/1784397180"}
    {:image "Clojure Web Development Essentials.png" :url "http://amzn.com/1784392227"}
    {:image "Clojure Data Analysis Cookbook.png" :url "http://amzn.com/1784390291"}
    {:image "Web Development with Clojure.png" :url "http://amzn.com/1680500821"}
    {:image "Clojure for Domain-specific Languages.png" :url "http://amzn.com/1782166505"}
    {:image "Mastering Clojure Data Analysis.png" :url "http://amzn.com/1783284137"}]))

(defn cljs-books-1
  []
  (add-image-with-link
   :cljs "cljsbook1"
   [{:image "ClojureScript Up and Running.png" :url "http://amzn.com/1491924993"}
    {:image "Learning ClojureScript.png" :url "http://amzn.com/B016WKHQ1C"}
    {:image "Etudes for ClojureScript.png" :url "http://amzn.com/B0184Q1RU8"}
    {:image "ClojureScript Unraveled.png" :url "https://leanpub.com/clojurescript-unraveled"}]))

(defn build-system
  []
  (let [ilink (fn [{:keys [image url]}]
                [:div.col-xs-4
                 [:a.thumbnail {:href url :target "_blank"}
                  [:img.img-responsive
                   {:src
                    (str "picts/" image)}]]])
        child
        [{:image "leiningen-text.png" :url "http://leiningen.org/"}
         {:image "boot-text.png" :url "http://boot-clj.com/"}]]
    (add-element-to-id
     "build-system"
     [:div.row (for [c child] (ilink c))])))

(defn ^:export init []
  (.log js/console "load slide.app.cljs")
  ;;
  (build-system)
  (clojure-books-1)
  (clojure-books-2)
  (clojure-books-3)
  (cljs-books-1))
