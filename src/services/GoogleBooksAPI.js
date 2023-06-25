import moment from 'moment';

let GoogleBooksApi = (function() {
    let urlEndpoint = `https://www.googleapis.com/books/v1/volumes`;

    function SearchForBooks(textToQuery, callbackSuccess, callbackError) {
        let urlQuery = `${urlEndpoint}?q=${textToQuery}`;

        fetch(urlQuery)
            .then(response => response.json().then(t => callbackSuccess(t)))
            .catch(error => callbackError(error));
    }

    function ParseDataPublicacao(element) {
        let dado = element.publishedDate;
        let formato = 'ausente';

        if (dado === undefined) {
            return {
                valor: '',
                formato: 'ausente'
            };
        }
        
        if (dado.length === 4) {
            formato = 'YYYY';
        } else if (dado.length === 7) {
            formato = 'YYYY-MM';
        } else if (dado.length === 10) {
            formato = 'YYYY-MM-DD';
        }

        return {
            valor: moment(dado, formato),
            formato: formato
        };
    }

    function ParseBookItem(item) {
        let v = item.volumeInfo;
        
        let autores = v.authors !== undefined ? v.authors : ['Autores ausente'];
        let imageUrl = v.imageLinks !== undefined ? v.imageLinks.thumbnail : undefined;

        return {
          titulo: v.title,
          autores: autores,
          dataPublicacao: ParseDataPublicacao(v),
          imageUrl: imageUrl,
          link: v.previewLink
        };
    }

    function ParseBookItems(data) {
        return data.items.map(item => ParseBookItem(item));
    }

    return {
        SearchForBooks: SearchForBooks,
        ParseBookItems: ParseBookItems
    };
})();

export default GoogleBooksApi;