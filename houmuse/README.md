# HouMuse- Houston Museum Finder
### This app was built for project 5 of Udacity's Front-End Developer Nanodegree
A neighborhood map built with [Google Maps](https://developers.google.com/maps/documentation/) that shows selected locations of interest. The locations should be filterable, and each location should display information pulled from a third-party API. HouMuse proudly draws data from the [FourSquare](https://developer.foursquare.com/overview/) API. 
## Getting Started
**Run it locally**: clone/download this repository. Open index.html in your browser.

**See it live**: [HouMuse]()

## Resources
- [JavaScript Design Patterns course](https://www.udacity.com/course/javascript-design-patterns--ud989)
- [Google Maps APIs course](https://www.udacity.com/course/google-maps-apis--ud864)
- [Overflow scroll- CSS-trickscom](http://www.css-tricks.com/topic/why-no-scroll-bar-when-using-a-div-within-a-div/)
- [Google Maps Styling Wizard](http://googlemaps.github.io/js-samples/styledmaps/wizard/index.html)
- [Link to Directions from Google Maps- Gearside.com](https://gearside.com/easily-link-to-locations-and-directions-using-the-new-google-maps/)
- [KnockoutJS Documentation](http://http://knockoutjs.com/documentation/introduction.html)
- [FourSquare get venue- StackOverflow](http://stackoverflow.com/questions/9090743/foursquare-getting-and-displaying-venues-in-browser)
- [jQuery.ajax()](http://api.jquery.com/jquery.ajax/)
- [Setting CSS Styles Using JavaScript- Kirupa](https://www.kirupa.com/html5/setting_css_styles_using_javascript.htm)
- [Toggle Visibility - Show/Hide Anything- Movalog](http://blog.movalog.com/a/javascript-toggle-visibility/)

## Project Requirements
- **Interface Design**
  - All components should render on-screen in a responsive manner
  - All components should be useable across modern desktop, tablet, and phone browsers.
- **App Functionality**
  - Should include text input or dropdown menu that filters map markers and list items to locations matching the text input of selection. Should run error-free.
  - A list-view of location names should display all locations by default, and filtered locations when filter is applied. Clicking a location on the list should display information about the location, and animate its map marker. Should run error-free.
  - Map should display all location markers by default, and the filtered subset of location markers when a filter is applied.
  - Clicking a marker should display location information in an infowindow or DOM element.
  - Markers should animate when clicked.
  - Custom functionality should run error-free.
- **App Architecture**
  - Code should be properly organized based upon Knockout best practices
    - MVVM pattern
    - Avoid updating DOM maually with jQuery or JS
    - Use observables rather than forcing refreshes manually
    - Knockout should not be used to handle the Google Map API.
  -There are at least 5 locations hard-coded in the model.
- **Asynchronous Data Usage**
  - App should utilize Google Maps API and at least one non-Google third-party API.
  - All data requests should be retrieved in an asynchronous manner.
  - Failed data requests should be handled gracefully using common fallback techniques. There should be some visible indication that it didn't load.
- **Location Details Functionality**
  - Addition data about locations should be provided and sourced from a 3rd party API. Information can be provided in the marker's infoWindow, or an HTML element in the DOM.
  - Provide attribution for additional data. Indicate your use of the API somewhere in the UI and in the README.
  - App runs without errors.
  - App functionality is usable and responsive.
- **Documentation**
  - README file should detail all steps required to run application.
  - Comments should effectively explain longer code procedures.
  - Code should be formatted with consistent, logical, and easy-to-read formatting: see [Udacity Javascript Style Guide](http://udacity.github.io/frontend-nanodegree-styleguide/javascript.html)
  - Source and production code should be submitted in the same repository in separate directories.
- **Make Your Project Stand Out!**
  - Add unique functionality.
  - Incorporate a build process allowing for production quality, minified code to be delivered to the client.
  - Data persists when the app is closed and reopened.
  - Include additional third-party data sources.
  - Style different markers in different (and functionally-useful) ways.
  - Implement additional optimizations that improve performance and UX of the filter functionality.
  - Integrate all app components into a cohesive and enjoyable user experience.

##Future Functionality
- Filter locations by tag
- Itenerary planner
