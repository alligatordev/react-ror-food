class Order < ApplicationRecord
  belongs_to :restaurant
  has_many :Order_products

  validates :name, presence: true
  validates :phone_number, presence: true
  validates :total_value, presence: true

  enum status: {waiting: 0, delivered: 1}
end
