import { defineStore } from 'pinia';

import axios from 'axios';
import VueCookies from 'vue-cookies'
import { fa0 } from '@fortawesome/free-solid-svg-icons';

import { useRoute } from 'vue-router';
const Route = useRoute();


export const useCounterStore = defineStore('counter', {
  state: () => {
    return {
      domain_Backend: 'https://thaipt.pythonanywhere.com', domain_Frontend: '', Path_Route: useRoute(),

      // Social///////////////////////
      Search_Book: '', Method_Book: 'None', Category_Book: 'None', less: '', greater: '', less_than: '', greater_than: '', Style_Book: 'Book name',
      Data_all_books: '',
      Category_Book_all: ['history', 'horror', 'travel', 'art', 'business', 'mystery', 'fantasy', 'thriller', 'comics', 'science-fiction', 'non-fiction', 'science', 'biography', 'adventure', 'manga'],
      desc_asc: 'desc', loading_page: 1,

      Tab_Function: 1, button_function: 1, Return_data: '', Loi_file: 1,

    }
  },

  getters: {
  },

  actions: {
    async F_titile_books() {
      this.loading_page = 2;
      this.Data_all_books = await axios({
        method: 'get',
        params: {
          Search_Book: this.Search_Book,
          Style_Book: this.Style_Book,
          Category_Book: this.Category_Book,
          Method_Book: this.Method_Book,
          less: this.less,
          less_than: this.less_than,
          greater_than: this.greater_than,
          greater: this.greater,
          desc_asc: this.desc_asc
        },
        url: this.domain_Backend + '/search-title-books'
      });
      this.Data_all_books = await this.Data_all_books.data.hits.hits;
      this.loading_page = 1;
    },
    async F_description_books() {
      this.loading_page = 1;
      this.Data_all_books = await axios({
        method: 'get',
        params: {
          Search_Book: this.Search_Book,
          Style_Book: this.Style_Book,
          Category_Book: this.Category_Book,
          Method_Book: this.Method_Book,
          less: this.less,
          less_than: this.less_than,
          greater_than: this.greater_than,
          greater: this.greater,
          desc_asc: this.desc_asc
        },
        url: this.domain_Backend + '/search-description-books'
      });
      this.Data_all_books = await this.Data_all_books.data.hits.hits;
      this.loading_page = 1;
    },
  }
})


