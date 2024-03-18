class Api::V1::ProgrammingController < ApplicationController


    def javascript
        page = params[:page] || 1
        per = params[:per] || 15
        @javascriptbooks = []
        @javascriptbooks.concat(RakutenWebService::Books::Book.search(title: "JavaScript", page: page, hits: per).to_a)
        render json: { status: 'javascript', data: @javascriptbooks }
    end

    def typescript
        page = params[:page] || 1
        per = params[:per] || 15
        @typescriptbooks = []
        @typescriptbooks.concat(RakutenWebService::Books::Book.search(title: "TypeScript", page: page, hits: per).to_a)
        render json: { status: 'typescript', data: @typescriptbooks }
    end



    def ruby
        page = params[:page] || 1
        per = params[:per] || 15
        @rubybooks = []
        @rubybooks.concat(RakutenWebService::Books::Book.search(title: "Ruby", booksGenreId: "001005017", page: page, hits: per).to_a)
        render json: { status: 'ruby', data: @rubybooks }
    end


    def python
        page = params[:page] || 1
        per = params[:per] || 15
        @pythonbooks = []
        @pythonbooks.concat(RakutenWebService::Books::Book.search(title: "Python", booksGenreId: "001005017", page: page, hits: per).to_a)
        render json: { status: 'python', data: @pythonbooks }
    end


    def java
        page = params[:page] || 1
        per = params[:per] || 15
        @javabooks = []
        @javabooks.concat(RakutenWebService::Books::Book.search(title: "Java", booksGenreId: "001005017", page: page, hits: per).to_a)
        render json: { status: 'java', data: @javabooks }
    end

    def php
        page = params[:page] || 1
        per = params[:per] || 15
        @phpbooks = []
        @phpbooks.concat(RakutenWebService::Books::Book.search(title: "PHP", booksGenreId: "001005017", page: page, hits: per).to_a)
        render json: { status: 'php', data: @phpbooks }
    end

    def go
        page = params[:page] || 1
        per = params[:per] || 15
        @gobooks = []
        @gobooks.concat(RakutenWebService::Books::Book.search(title: "Go", booksGenreId: "001005017", page: page, hits: per).to_a)
        render json: { status: 'go', data: @gobooks }
    end

    def react
        page = params[:page] || 1
        per = params[:per] || 15
        @reactbooks = []
        @reactbooks.concat(RakutenWebService::Books::Book.search(title: "React", booksGenreId: "001005017", page: page, hits: per).to_a)
        render json: { status: 'react', data: @reactbooks }
    end

    def vue
        page = params[:page] || 1
        per = params[:per] || 15
        @vuebooks = []
        @vuebooks.concat(RakutenWebService::Books::Book.search(title: "Vue", booksGenreId: "001005017", page: page, hits: per).to_a)
        render json: { status: 'vue', data: @vuebooks }
    end
    
    def nextjs
        page = params[:page] || 1
        per = params[:per] || 15
        @nextjsbooks = []
        @nextjsbooks.concat(RakutenWebService::Books::Book.search(title: "Next.js", booksGenreId: "001005017", page: page, hits: per).to_a)
        render json: { status: 'nextjs', data: @nextjsbooks }
    end

    def nuxtjs
        page = params[:page] || 1
        per = params[:per] || 15
        @nuxtjsbooks = []
        @nuxtjsbooks.concat(RakutenWebService::Books::Book.search(title: "Nuxt.js", booksGenreId: "001005017", page: page, hits: per).to_a)
        render json: { status: 'nuxtjs', data: @nuxtjsbooks }
    end

    def nestjs
        page = params[:page] || 1
        per = params[:per] || 15
        @nestjsbooks = []
        @nestjsbooks.concat(RakutenWebService::Books::Book.search(title: "Nest.js", booksGenreId: "001005017", page: page, hits: per).to_a)
        render json: { status: 'nestjs', data: @nestjsbooks }
    end

    def jquery
        page = params[:page] || 1
        per = params[:per] || 15
        @jquerybooks = []
        @jquerybooks.concat(RakutenWebService::Books::Book.search(title: "jQuery", page: page, hits: per).to_a)
        render json: { status: 'jquery', data: @jquerybooks }
    end

    def rails
        page = params[:page] || 1
        per = params[:per] || 15
        @railsbooks = []
        @railsbooks.concat(RakutenWebService::Books::Book.search(title: "Rails", booksGenreId: "001005017", page: page, hits: per).to_a)
        render json: { status: 'rails', data: @railsbooks }
    end

    



end