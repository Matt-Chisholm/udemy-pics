import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar.js";


class App extends React.Component {
  state = {images: []};

  async onSearchSubmit (term) {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
      params: { query: term },
      headers: {
        Authorization: 'Client-ID bndt4l2tmaOrzQKgHT5-lKThVHWjV-eAHeqmbVGzP4E'
      }
    })
    console.log(response.data.results);
  } 

  render() {
    return <div>
      <SearchBar onSubmit={this.onSearchSubmit} />
    </div>
  }
}

export default App;