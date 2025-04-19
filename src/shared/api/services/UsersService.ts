/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { User } from '../models/User';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class UsersService {
    /**
     * Get all users
     * Retrieve a list of all users.
     * @returns User Success
     * @throws ApiError
     */
    public static getAllUsers(): CancelablePromise<Array<User>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/users',
            errors: {
                400: `Bad request`,
            },
        });
    }
    /**
     * Add a new user
     * Create a new user.
     * @param requestBody
     * @returns User User created successfully
     * @throws ApiError
     */
    public static addUser(
        requestBody: User,
    ): CancelablePromise<User> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/users',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad request`,
            },
        });
    }
    /**
     * Get a single user
     * Retrieve details of a specific user by ID.
     * @param id
     * @returns User Success
     * @throws ApiError
     */
    public static getUserById(
        id: number,
    ): CancelablePromise<User> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/users/{id}',
            path: {
                'id': id,
            },
            errors: {
                400: `Bad request`,
            },
        });
    }
    /**
     * Update a user
     * Update an existing user by ID.
     * @param id
     * @param requestBody
     * @returns User User updated successfully
     * @throws ApiError
     */
    public static updateUser(
        id: number,
        requestBody: User,
    ): CancelablePromise<User> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/users/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad request`,
            },
        });
    }
    /**
     * Delete a user
     * Delete a specific user by ID.
     * @param id
     * @returns any User deleted successfully
     * @throws ApiError
     */
    public static deleteUser(
        id: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/users/{id}',
            path: {
                'id': id,
            },
            errors: {
                400: `Bad request`,
            },
        });
    }
}
