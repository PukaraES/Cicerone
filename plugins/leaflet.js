import Vue from 'vue'
import Vue2LeafletMarkerCluster from 'vue2-leaflet-markercluster'
import * as L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import 'leaflet.markercluster/dist/MarkerCluster.css'
import 'leaflet.markercluster/dist/MarkerCluster.Default.css'

// eslint-disable-next-line
Vue.component('v-marker-cluster', Vue2LeafletMarkerCluster)
const LeafletPlugin = {
  install (Vue) {
    Vue.prototype.$L = L
    L.markerClusterGroup({ showCoverageOnHover: false })
  }
}

Vue.use(LeafletPlugin)
