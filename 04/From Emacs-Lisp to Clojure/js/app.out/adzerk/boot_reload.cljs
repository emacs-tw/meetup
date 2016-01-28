(ns adzerk.boot-reload (:require [adzerk.boot-reload.client :as client] slide.app))
(client/connect "ws://localhost:49452" {:on-jsload (fn* [] (slide.app/init))})