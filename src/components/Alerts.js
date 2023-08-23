import React from 'react'

export default function Alerts(props) {
  return (
    props.Alert && <div class={`alert alert-${props.Alert.type} alert-dismissible fade show`} role="alert">
        <strong>{props.Alert.msg}</strong>
    </div>
  )
}
