class Api::V1::BooksController < ApplicationController



    def search
        page = params[:page] || 1
        per = params[:per] || 30 
        @all_books = RakutenWebService::Books::Book.search(booksGenreId: "001005005", page: page, hits: per)
        
        render json: { status: 'success', data: @all_books }
    end



    def base
        @books = []
        @books.concat(RakutenWebService::Books::Book.search(title: "入門 HTML").to_a)
        @books.concat(RakutenWebService::Books::Book.search(title: "入門 CSS").to_a)
        @books.concat(RakutenWebService::Books::Book.search(title: "入門 Ruby").to_a)
        @books.concat(RakutenWebService::Books::Book.search(title: "入門 Python").to_a)
        @books.concat(RakutenWebService::Books::Book.search(title: "入門 Java").to_a)
        @books.concat(RakutenWebService::Books::Book.search(title: "入門 JavaScript").to_a)
        @books.concat(RakutenWebService::Books::Book.search(title: "入門 AWS").to_a)
        render json: { status: 'base', data: @books }
    end


    def css
        @cssbooks = []
        @cssbooks.push(RakutenWebService::Books::Book.search(title: "CSS"))
        @cssbooks.push(RakutenWebService::Books::Book.search(title: "Bootstrap"))
        @cssbooks.push(RakutenWebService::Books::Book.search(title: "Sass"))
        @cssbooks.push(RakutenWebService::Books::Book.search(title: "Tailwind"))
        @cssbooks.push(RakutenWebService::Books::Book.search(title: "CSS設計"))
        render json: { status: 'css', data: @cssbooks }

    end


end
