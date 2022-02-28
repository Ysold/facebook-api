import jwt from 'jsonwebtoken';
import * as AuthenticationModel from '../models/authentication.model';

export const login = async (request, response) => {
  const { email, password } = request.body;

  const user = await AuthenticationModel.findByCredentials({ email, password }, { id: true, email: true });
  const token = jwt.sign({ id: user.id }, 'SECRET');

  response.json({ token, user });
}

export const register = async (request, response) => {
  const { email, password } = request.body;
  const user = await AuthenticationModel.createOne({ email, password });

  response.status(201).json({ user });
}