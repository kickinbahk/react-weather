var React = require('react')

var About = (props) => {
  return (
    <div>
      <h1 className='text-center page-title'>About</h1>
      <p>Welcome to the React Weather app!</p>
      <p>It will allow you to get the weather of any location you would like!</p>
      <p>This is built using <a href='https://facebook.github.io/react/'>React</a> and <a href='http://openweathermap.org/api'>Open Weather API</a>.</p>
      <br />
      <p>You can see the code <a href='https://github.com/kickinbahk/react-weather'>here on Github</a></p>
    </div>
  )
}

module.exports = About
