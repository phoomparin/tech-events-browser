import React from 'react'
import styled, {css} from 'react-emotion'

// The Icon Map for our icons.
const icons = {
  clock: `M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm216 248jAc0 118.7-96.1 216-216 216-118.7 0-216-96.1-216-216 0-118.7 96.1-216 216-216 118.7 0 216 96.1 216 216zm-148.9 88.3l-81.2-59c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h14c6.6 0 12 5.4 12 12v146.3l70.5 51.3c5.4 3.9 6.5 11.4 2.6 16.8l-8.2 11.3c-3.9 5.3-11.4 6.5-16.8 2.6z`,
  calendar: `M400 64h-48V12c0-6.627-5.373-12-12-12h-8c-6.627 0-12 5.373-12 12v52H128V12c0-6.627-5.373-12-12-12h-8c-6.627 0-12 5.373-12 12v52H48C21.49 64 0 85.49 0 112v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zM48 96h352c8.822 0 16 7.178 16 16v48H32v-48c0-8.822 7.178-16 16-16zm352 384H48c-8.822 0-16-7.178-16-16V192h384v272c0 8.822-7.178 16-16 16z`,
  mapPin: `M192 96c-52.935 0-96 43.065-96 96s43.065 96 96 96 96-43.065 96-96-43.065-96-96-96zm0 160c-35.29 0-64-28.71-64-64s28.71-64 64-64 64 28.71 64 64-28.71 64-64 64zm0-256C85.961 0 0 85.961 0 192c0 77.413 26.97 99.031 172.268 309.67 9.534 13.772 29.929 13.774 39.465 0C357.03 291.031 384 269.413 384 192 384 85.961 298.039 0 192 0zm0 473.931C52.705 272.488 32 256.494 32 192c0-42.738 16.643-82.917 46.863-113.137S149.262 32 192 32s82.917 16.643 113.137 46.863S352 149.262 352 192c0 64.49-20.692 80.47-160 281.931z`,
}

// Specify Viewboxes for each icons.
const viewBox = {
  calendar: '0 0 448 512',
  mapPin: '0 0 384 512',
}

// Initial Values
const initial = {
  size: 1.1,
  color: '#555',
  viewBox: '0 0 512 512',
}

// prettier-ignore
const Svg = styled.svg`
  width: ${props => props.size || initial.size}em;
  height: ${props => props.size || initial.size}em;
  fill: ${props => props.fill || initial.color};

  ${props => props.left && css`
    margin-right: 0.5em;
  `};
`

const Icon = ({i, ...props}) =>
  icons[i] && (
    <Svg viewBox={viewBox[i] || initial.viewBox} {...props}>
      <path d={icons[i]} />
    </Svg>
  )

export default Icon
