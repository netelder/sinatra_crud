get '/' do
  # Look in app/views/index.erb
  @notes = Note.all
  erb :index
end

post '/notes/create' do
	p params
	note = Note.new(params)
	if note.valid?
		p "--------------valid"
		note.save
		return 'redirect' 
	else
		return note.errors.full_messages.to_json
	end
end


put '/notes/:id' do
	p "------------- put"
	p params
end


delete '/notes/:id' do
	Note.destroy(params[:id])
	redirect '/'
end
