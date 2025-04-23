import { db } from '../config/dbconfig';
import { Request, Response } from 'express';

// GET: Fetch all users
export const getUsers = (req: Request, res: Response) => {
   db.query('SELECT * FROM users', (err, results) => {
      if (err) {
         console.error(err);
         res.status(500).json({ error: "Failed to fetch users" });
      } else {
         res.json(results);
      }
   });
};

// POST: Add a new user
export const createUser = (req: Request, res: Response) => {
   const { id, name, email } = req.body;
   const now = new Date();

   const query = `INSERT INTO users (id, name, email, createdAt, updatedAt) VALUES (?, ?, ?, ?, ?)`;
   db.query(query, [id, name, email, now, now], (err, result) => {
      if (err) {
         console.error(err);
         res.status(500).json({ error: "Failed to add user" });
      } else {
         res.status(201).json({ message: "User added successfully", result });
      }
   });
};

// PUT: Update a user by ID
export const updateUser = (req: Request, res: Response) => {
   const { id } = req.params;
   const { name, email } = req.body;
   const now = new Date();

   const query = `UPDATE users SET name = ?, email = ?, updatedAt = ? WHERE id = ?`;
   db.query(query, [name, email, now, id], (err, result) => {
      if (err) {
         console.error(err);
         res.status(500).json({ error: "Failed to update user" });
      } else {
         res.json({ message: "User updated successfully", result });
      }
   });
};

// DELETE: Remove a user by ID
export const deleteUser = (req: Request, res: Response) => {
   const { id } = req.params;

   const query = `DELETE FROM users WHERE id = ?`;
   db.query(query, [id], (err, result) => {
      if (err) {
         console.error(err);
         res.status(500).json({ error: "Failed to delete user" });
      } else {
         res.json({ message: "User deleted successfully", result });
      }
   });
};
