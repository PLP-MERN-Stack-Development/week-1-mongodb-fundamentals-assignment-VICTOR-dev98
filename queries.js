/*Question 2*/

db.books.find({ genre: "Fiction" });

db.books.find({ published_year: { $gt: 1950 } });

db.books.find({ author: "George Orwell" });

db.books.updateOne({ title: "You Don't Know JS" }, { $set: { price: 50 } });

db.books.deleteOne({ title: "Pride and Prejudice" });

/*Question 3*/
db.books.find({ in_stock: true, published_year: { $gt: 1950 } });

db.books.find({}, { title: 1, author: 1, price: 1, _id: 0 });

db.books.find().sort({ price: 1 });

db.books.find().sort({ price: -1 });

db.books.find().skip(0).limit(5);  // Page 1
db.books.find().skip(5).limit(5);  // Page 2

/*Question 4*/

db.books.aggregate([
    { $group: { _id: "$genre", avgPrice: { $avg: "$price" } } }
  ]);

  db.books.aggregate([
    { $group: { _id: "$author", bookCount: { $sum: 1 } } },
    { $sort: { bookCount: -1 } },
    { $limit: 1 }
  ]);

  db.books.aggregate([
    { $group: { _id: "$author", bookCount: { $sum: 1 } } },
    { $sort: { bookCount: -1 } },
    { $limit: 1 }
  ]);

  /*Question 5*/
  db.books.createIndex({ title: 1 });

  db.books.createIndex({ author: 1, published_year: 1 });

  db.books.find({ title: "Wuthering Heights" }).explain("executionStats");
