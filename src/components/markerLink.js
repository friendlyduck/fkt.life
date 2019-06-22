import React, { Component } from 'react'
import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js'


class MarkerLink extends Component {
  showOnMap() {
    let { label, zoom, lat, lng } = this.props

    let myLatLng = { lat: parseFloat(lat), lng: parseFloat(lng) }

    let el = document.createElement('div');
    let markerlabel = document.createTextNode(label)

    el.className = 'c-mapbox-marker-label';
    el.appendChild(markerlabel)

    new mapboxgl.Marker(el)
      .setLngLat(myLatLng)
      .addTo(window.map)

    console.log(window.map)
    window.map.flyTo({
      center: myLatLng,
      zoom: zoom
    })
  }

  render() {
    return (
      <button
        onClick={this.showOnMap.bind(this)}
      >
        {this.props.children}
      </button>
    )
  }
}

export default MarkerLink
