import { Injectable, ConflictException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './user.schema';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
  ) { }

  async create(userData: {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
  }): Promise<User> {
    const existingUser = await this.userModel.findOne({
      email: userData.email,
    });

    if (existingUser) {
      throw new ConflictException('User with this email already exists');
    }

    const user = new this.userModel(userData);
    return user.save();
  }

  async findByEmail(email: string): Promise<UserDocument | null> {
    return this.userModel.findOne({ email }).exec();
  }

  async findById(id: string): Promise<UserDocument | null> {
    return this.userModel.findById(id).exec();
  }

  async updateProfile(userId: string, updateData: { firstName: string; lastName: string }) {
    return this.userModel.findByIdAndUpdate(
      userId,
      { firstName: updateData.firstName, lastName: updateData.lastName },
      { new: true }
    ).exec();
  }

  async updateProfilePicture(userId: string, profilePictureUrl: string) {
    return this.userModel.findByIdAndUpdate(
      userId,
      { profilePicture: profilePictureUrl },
      { new: true }
    ).exec();
  }

  async updatePassword(userId: string, newPassword: string) {
    const user = await this.userModel.findById(userId);
    if (!user) {
      throw new Error('User not found');
    }
    user.password = newPassword; // Will be hashed by pre-save hook
    return user.save();
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find().select('-password').exec();
  }
}
