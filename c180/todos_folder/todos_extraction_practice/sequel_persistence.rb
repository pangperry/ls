require "sequel"

class SequelPersistence
  def initialize(logger)
    @db = Sequel.connect("postgres://localhost/todos")
    @db.logger = logger
    #@logger = logger minut 13.26 talks about his

  end

  #def query(statement, *params)
    #@logger.info "#{statement}: #{params}"
    #@db.exec_params(statement, params)
  #end

  def find_list(id)
    all_lists.where(lists__id: id).first
    #shorter_version: all_lists.first(lists__id: id) #minut 8:50
  end
=begin #list to the video explanation arround
    sql = <<~SQL
      SELECT lists.*,
      COUNT(todos.id) AS todos_count,
      COUNT(NULLIF(todos.completed, true)) AS todos_remaining_count
      FROM lists
      LEFT JOIN todos ON todos.list_id = lists.id
      WHERE lists.id = $1
      GROUP BY lists.id
      ORDER BY lists.name;
    SQL
    result = query(sql, id)

    tuple_to_list_hash(result.first)
  end
=end

  def all_lists
    @db[:lists].left_join(:todos, list_id: :id).
      select_all(:lists).
      select_append do
        [count(todos__id).as(todos_count),
         count(nullif(todos__completed, true)).as(todos_remaining_count)]
      end.group(:lists__id).
      order(:lists__name)
  end
=begin
    sql = <<~SQL
      GROUP BY lists.id
      ORDER BY lists.name;
    SQL
    result = query(sql)

    result.map do |tuple|
      tuple_to_list_hash(tuple)
    end
=end

  def create_new_list(list_name)
    @db[:lists].insert(name: list_name)
    #sql = "INSERT INTO lists (name) VALUES ($1);"
    #query(sql, list_name)
  end

  def delete_list(id)
    @db[:todos].where(list_id: id).delete
    @db[:lists].where(id: id).delete
    #query("DELETE FROM todos WHERE id = $1", id)
    #query("DELETE FROM lists WHERE id = $1", id)
  end

  def update_list_name(id, new_name)
    @db[:lists].where(id: id).update(name: new_name)
    #list = find_list(id)
    #sql = "UPDATE lists SET name = $1 WHERE id= $2;"
    #query(sql,new_name, id)
  end

  def create_new_todo(list_id, todo_name)
    @db[:todos].insert(list_id: list_id, name: todo_name)
    #sql = "INSERT INTO todos (list_id, name) VALUES($1,$2);"
    #query(sql, list_id, todo_name)
  end

  def delete_todo_from_list(list_id, todo_id)
    @db[:todos].where(list_id: list_id, id: todo_id).delete
    #interesting...the AND below through me off!!!

    #sql = "DELETE FROM todos WHERE id = $1 AND list_id = $2"
    #query(sql, todo_id, list_id)
  end

  def update_todo_status(list_id, todo_id, new_status)
    @db[:todos].where(list_id: list_id, id: todo_id).update(completed: new_status)
    #sql = "UPDATE todos SET completed = $1 WHERE id = $2 AND list_id = $3"
    #query(sql, new_status, todo_id, list_id)
  end

  def mark_all_todos_as_completed(list_id)
    @db[:todos].where(list_id: list_id).update(completed: true)
    #sql = "UPDATE todos SET completed = true WHERE list_id = $1"
    #query(sql, list_id)
  end

  def find_todos_for_list(list_id)
    @db[:todos].where(list_id: list_id)
  end

=begin
    todo_sql = "SELECT * FROM todos WHERE list_id = $1"
    todos_result = query(todo_sql, list_id)

    todos_result.map do |todo_tuple|
      { id: todo_tuple["id"].to_i,
        name: todo_tuple["name"],
        completed: todo_tuple["completed"] == "t" } #sequel will deal with this piece too
    end
=end

  private

  #def tuple_to_list_hash(tuple)
    #{ id: tuple["id"],
      #name: tuple["name"],
      #todos_count: tuple["todos_count"].to_i,
      #todos_remaining_count: tuple["todos_remaining_count"].to_i }
  #end
end
