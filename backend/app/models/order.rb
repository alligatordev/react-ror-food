class Order < ApplicationRecord
  belongs_to :restaurant
  has_many :Order_products
end
