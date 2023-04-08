<template>
  <div class="container category p-4 mt-5 mb-5 bg-black rounded">
    <div class="row">
      <div class="col-3 row bg-dark rounded p-3 m-1">
        <div class="col-12 text-light bg-black rounded p-2 mb-3">
          <!-- <h5 class="ms-2">Wähle ein Mindestalter:</h5>
          <div class="col-12 d-flex justify-content-center flexfix">
            <div class="">
              <input
                type="radio"
                class="btn-check"
                name="options-outlined"
                id="light-outlined"
                autocomplete="off"
                checked
                value="0"
                v-model="fsk"
              />
              <label
                class="btn btn-outline-light m-2 btn-fsk flexfix"
                for="light-outlined"
                >0</label
              >
            </div>
            <div class="">
              <input
                type="radio"
                class="btn-check"
                name="options-outlined"
                id="warning-outlined"
                autocomplete="off"
                value="6"
                v-model="fsk"
              />
              <label
                class="btn btn-outline-warning m-2 btn-fsk flexfix"
                for="warning-outlined"
                >6</label
              >
            </div>
            <div class="">
              <input
                type="radio"
                class="btn-check"
                name="options-outlined"
                id="success-outlined"
                autocomplete="off"
                value="12"
                v-model="fsk"
              />
              <label
                class="btn btn-outline-success m-2 btn-fsk flexfix"
                for="success-outlined"
                >12</label
              >
            </div>
            <div class="">
              <input
                type="radio"
                class="btn-check"
                name="options-outlined"
                id="primary-outlined"
                autocomplete="off"
                value="16"
                v-model="fsk"
              />
              <label
                class="btn btn-outline-primary m-2 btn-fsk flexfix"
                for="primary-outlined"
                >16</label
              >
            </div>
            <div class="">
              <input
                type="radio"
                class="btn-check"
                name="options-outlined"
                id="danger-outlined"
                autocomplete="off"
                value="18"
                v-model="fsk"
              />
              <label
                class="btn btn-outline-danger m-2 btn-fsk flexfix"
                for="danger-outlined"
                >18</label
              >
            </div>
          </div> -->
        </div>
      </div>
      <div class="col-3 row bg-dark rounded p-3 m-1">
        <div class="col-12 text-light bg-black rounded p-2 mb-3 row">
          <label for="genre" class="text-light col-12 p-1">
            <h4>Genre:</h4></label
          >
          <div
            v-for="genre in allGenres"
            :key="genre"
            class="hashtag-element col-auto"
            role="button"
            isactive="false"
            @click="handleGenre"
            :genre="genre"
          >
            <p class="p-0 m-0">{{ genre }}</p>
          </div>
        </div>
      </div>
      <div class="col-3 row bg-dark rounded p-3 m-1">
        <div class="col-12 text-light bg-black rounded p-2 mb-3 row">
          <label><h4>Actors:</h4></label>
          <input
            type="text"
            id="search-actor"
            class="col-12 h-25"
            v-model="actorsName"
            @keyup.enter="addActor(actorsName, $event)"
          />
          <div
            v-for="actor in actors"
            :key="actor"
            class="hashtag-element col-auto active-genre"
            role="button"
            isactive="false"
            @click="removeActor"
            :actor="actor"
          >
            <p class="p-0 m-0">{{ actor }}</p>
          </div>
        </div>
      </div>
      <div class="col-3 row bg-dark rounded p-3">
        <div class="col-12 text-light bg-black rounded row ">
          <h5 class="col-12">Choose your Streamingplattforms:</h5>
          <div class="col-12 d-flex justify-content-between row">
            <div class="col-12 netflix-logo" role="button" 
            :class="{ 'netflix-logo-active': searchInNetflix }"
            @click="searchInNetflix = !searchInNetflix"></div>
            <div class="col-12 amazon-logo" role="button" 
            :class="{ 'amazon-logo-active': searchInPrime }"
            @click="searchInPrime = !searchInPrime"></div>
            <div class="col-12 disney-logo" role="button" 
            :class="{ 'disney-logo-active': searchInDisney }"
            @click="searchInDisney = !searchInDisney"></div>
          </div>
        </div>
      </div>
      <div class="col-3 row bg-dark rounded p-3 m-1">
        <div class="col-12 text-light bg-black rounded p-2 mb-3 row">
          <label><h4>Movie:</h4></label>
          <input type="search" class="col-12 h-25" />
        </div>
      </div>
    </div>
    
    <FilteredStreams />
  </div>
</template>