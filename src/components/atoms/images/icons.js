import * as React from "react"

export const ExpandIcon = (props)  => {
  return (
    <svg
      aria-hidden="true"
      data-prefix="fas"
      data-icon="caret-down"
      className="prefix__svg-inline--fa prefix__fa-caret-down prefix__fa-w-10"
      viewBox="0 0 320 512"
      width='17px'
      {...props}
    >
      <path
        fill="#757575"
        d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
      />
    </svg>
  )
}

export const ContractIcon = (props) => {
  return (
    <svg
      aria-hidden="true"
      data-prefix="fas"
      data-icon="caret-up"
      className="prefix__svg-inline--fa prefix__fa-caret-up prefix__fa-w-10"
      viewBox="0 0 320 512"
      width='17px'
      {...props}
    >
      <path
        fill="#757575"
        d="M288.662 352H31.338c-17.818 0-26.741-21.543-14.142-34.142l128.662-128.662c7.81-7.81 20.474-7.81 28.284 0l128.662 128.662c12.6 12.599 3.676 34.142-14.142 34.142z"
      />
    </svg>
  )
}

export const RefreshIcon = (props) => {
  return (
    <svg
      aria-hidden="true"
      data-prefix="fas"
      data-icon="redo-alt"
      className="prefix__svg-inline--fa prefix__fa-redo-alt prefix__fa-w-16"
      viewBox="0 0 512 512"
      width='15px'
      {...props}
    >
      <path
        fill="#757575"
        d="M256.455 8c66.269.119 126.437 26.233 170.859 68.685l35.715-35.715C478.149 25.851 504 36.559 504 57.941V192c0 13.255-10.745 24-24 24H345.941c-21.382 0-32.09-25.851-16.971-40.971l41.75-41.75c-30.864-28.899-70.801-44.907-113.23-45.273-92.398-.798-170.283 73.977-169.484 169.442C88.764 348.009 162.184 424 256 424c41.127 0 79.997-14.678 110.629-41.556 4.743-4.161 11.906-3.908 16.368.553l39.662 39.662c4.872 4.872 4.631 12.815-.482 17.433C378.202 479.813 319.926 504 256 504 119.034 504 8.001 392.967 8 256.002 7.999 119.193 119.646 7.755 256.455 8z"
      />
    </svg>
  )
}
