class Media {
    contructor(title) {
      this._title = title;
      this._isCheckOut = false;
      this._ratings = [];
    }
    get title() {
      return this._title;
    }
    get isCheckOut() {
      return this._isCheckOut;
    }
    get ratings() {
      return this._ratings;
    }
    set isCheckOut(value) {
      this._isCheckOut = value;
    }
    getAverageRating() {
      const sumRating = this.ratings.reduce(
        (accumulator, rating) => accumulator + rating
      );
      return sumRating / this.ratings.length;
    }
  
    toggleCheckOutStatus() {
      this.isCheckOut = !this.isCheckOut;
    }
  
    addRating(value){
      this.ratings.push(value);
    
    }
  }
  
  class Books extends Media {
    constructor(title, pages, author) {
      super(title);
  
      this._author = author;
      this._pages = pages;
    }
    get author() {
      return this._author;
    }
    get pages() {
      return this._pages;
    }
  }
  
  class Movies extends Media {
    constructor(title, runtime, director) {
      super(title);
  
      this._director = director;
      this._runTime = runTime;
    }
    get director() {
      return this._director;
    }
    get runTime() {
      return this._runTime;
    }
  }
  
  const historyOfEverything = new Books(
    "A Short history of Nearly Everything",
    544,
    "Bill Bryson"
  );
  historyOfEverything.toggleCheckOutStatus();
  console.log(historyOfEverything.isCheckOut);
  
  historyOfEverything.addRating(4);
  historyOfEverything.addRating(5);
  historyOfEverything.addRating(5);
  historyOfEverything.getAverageRating();
  console.log(historyOfEverything.getAverageRating());
  