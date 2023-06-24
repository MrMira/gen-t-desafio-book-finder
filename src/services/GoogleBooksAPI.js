let GoogleBooksApi = (function() {
    let urlEndpoint = `https://www.googleapis.com/books/v1/volumes`;

    function SearchForBooks(textToQuery, callbackSuccess, callbackError) {
        let urlQuery = `${urlEndpoint}?q=${textToQuery}`;

        fetch(urlQuery)
            .then(response => response.json().then(t => callbackSuccess(t)))
            .catch(error => callbackError(error));
    }

    function ParseBookItem(item) {
        let v = item.volumeInfo;
        let imageUrl =  v.readingModes.image == false ? null : v.imageLinks.smallThumbnail;

        return {
          titulo: v.title,
          autores: v.authors,
          dataDePublicacao: v.publishDate,
          imageUrl: imageUrl,
        };
    }

    function ParseBookItems(dataRaw) {
        return dataRaw.items.map(item => ParseBookItem(item));
    }

    return {
        SearchForBooks: SearchForBooks,
        ParseBookItems: ParseBookItems
    };
})();

export default GoogleBooksApi;