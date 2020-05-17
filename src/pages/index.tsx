import React, { Component } from 'react'
import styled from 'styled-components'
import GoogleMapReact from 'google-map-react'
import { Badge } from '@/component/element'

const AnyReactComponent = (props): JSX.Element => {
  return (
    <Wrapper>
      <Badge>1</Badge>
      <span>{props.children}</span>
    </Wrapper>
  )
}

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 35.78,
      lng: 139.89,
    },
    zoom: 14,
  }

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          // bootstrapURLKeys={{
          //   key: process.env.googleMapApiKey,
          //   libraries: ["places"],
          // }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent lat={35.7806392} lng={139.9002746}>
            【つけ麺】とみ田
          </AnyReactComponent>
        </GoogleMapReact>
      </div>
    )
  }
}

export default SimpleMap

const Wrapper = styled.span`
  background-color: white;
  display: inline-block;
  width: 130px;
  height: 50px;
`
