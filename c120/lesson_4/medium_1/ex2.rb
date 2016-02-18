# ex2.rb

make the attr_reader for :quantity an attr_accessor,
then in the update_quantity method disambiguate quantity with
self, so that ruby nows you are reassigning the value of the instance
variable rather than assigning a local variable

or

simply add @ to quantity in update_quantity method to make it an instance variable
