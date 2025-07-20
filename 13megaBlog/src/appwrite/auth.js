import { Client, Account, ID } from "appwrite";
import conf from "../conf/conf";

class AuthService {
  client;
  account;

  constructor() {
    this.client = new Client()
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);

    this.account = new Account(this.client);
  }

  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (userAccount) {
        // Automatically log in after account creation
        return this.login({ email, password });
      }
      return userAccount;
    } catch (error) {
      console.error("Account creation failed:", error);
      throw error;
    }
  }

  async login({ email, password }) {
    try {
      return await this.account.createEmailSession(email, password);
    } catch (error) {
      console.error("Login failed:", error);
      throw error;
    }
  }

  async logout() {
    try {
      return await this.account.deleteSessions();
    } catch (error) {
      console.error("Logout failed:", error);
      throw error;
    }
  }

  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.error("Failed to get current user:", error);
      return null;
    }
  }
}

const authService = new AuthService();
export default authService;
// This service handles user authentication using Appwrite's Account API
// It provides methods to create an account, log in, log out, and get the current user
// The service uses the Appwrite Client and Account classes to interact with the Appwrite backend