/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Cart } from '../models/Cart';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class CartsService {
    /**
     * Get all carts
     * Retrieve a list of all available carts.
     * @returns Cart Success
     * @throws ApiError
     */
    public static getAllCarts(): CancelablePromise<Array<Cart>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/carts',
            errors: {
                400: `Bad request`,
            },
        });
    }
    /**
     * Add a new cart
     * Create a new cart.
     * @param requestBody
     * @returns Cart Cart created successfully
     * @throws ApiError
     */
    public static addCart(
        requestBody: Cart,
    ): CancelablePromise<Cart> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/carts',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad request`,
            },
        });
    }
    /**
     * Get a single cart
     * Retrieve details of a specific cart by ID.
     * @param id
     * @returns Cart Success
     * @throws ApiError
     */
    public static getCartById(
        id: number,
    ): CancelablePromise<Cart> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/carts/{id}',
            path: {
                'id': id,
            },
            errors: {
                400: `Bad request`,
            },
        });
    }
    /**
     * Update a cart
     * Update an existing cart by ID.
     * @param id
     * @param requestBody
     * @returns Cart Cart updated successfully
     * @throws ApiError
     */
    public static updateCart(
        id: number,
        requestBody: Cart,
    ): CancelablePromise<Cart> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/carts/{id}',
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
     * Delete a cart
     * Delete a specific cart by ID.
     * @param id
     * @returns any Cart deleted successfully
     * @throws ApiError
     */
    public static deleteCart(
        id: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/carts/{id}',
            path: {
                'id': id,
            },
            errors: {
                400: `Bad request`,
            },
        });
    }
}
