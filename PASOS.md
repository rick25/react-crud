## creo el esqueleto para el recurso post
rails g scaffold post title:string body:text

## agrego la gema para el trabajo con la api
bundle add rack-cors

## agrego la gema para el trabajo con la api
bundle add faker

## modifico el archivo seeds.rb
    Post.destroy_all

    50.times do |index|
        Post.create!(
            title: Faker::Lorem.sentence(word_count: 1, supplemental: false, random_words_to_add: 0).chop,
            body: Faker::Lorem.sentence(word_count: 6, supplemental: false, random_words_to_add: 0).chop,
        )
    end

    p "#{Post.count} posts creados"

    p "#{Book.count} books creados"

## creo la tabla en base de datos
rails db:migrate

## corro el seeder
rails db:seed

## para la conf del cors creo un archivo en ./config/initializers/cors.rb
    Rails.application.config.middleware.insert_before 0, Rack::Cors do
        allow do
            origins "http://localhost:3002"

            resource "*",
                headers: :any,
                methods: [:get, :post, :put, :patch, :delete, :options, :head]
        end
    end

## creo el frontend con react
npx create-react-app frontend --template redux-typescript

## modifico el archivo post_controller.rb para que trabaje como quiero
    skip_before_action :verify_authenticity_token   # agrego en la linea 3 para que salte la verificacion de la autenticidad del token
    format.json { render json: Post.all, status: :ok }  # modifico la linea 57 para que al eliminar un post, me devuelva todos los post con un status ok
    params.require(:post).permit(:title, :body, :id)    # modifico la linea 69 para q me pida en la creacion de un post el id

## instalo bootstrap 5 en el frontend lineas 24 y 25 de ./frontend/public/index.hmtl
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>