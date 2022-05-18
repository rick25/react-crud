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

