/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Product } from '../models/Product';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ProductsService {
    /**
     * Get all products
     * Retrieve a list of all available products.
     * @returns Product Success
     * @throws ApiError
     */
    public static getAllProducts(): CancelablePromise<Array<Product>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/products',
            errors: {
                400: `Bad request`,
            },
        });
    }
    /**
     * Add a new product
     * Create a new product.
     * @param requestBody
     * @returns Product Product created successfully
     * @throws ApiError
     */
    public static addProduct(
        requestBody: Product,
    ): CancelablePromise<Product> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/products',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad request`,
            },
        });
    }
    /**
     * Get a single product
     * Retrieve details of a specific product by ID.
     * @param id
     * @returns Product Success
     * @throws ApiError
     */
    public static getProductById(
        id: number,
    ): CancelablePromise<Product> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/products/{id}',
            path: {
                'id': id,
            },
            errors: {
                400: `Bad request`,
            },
        });
    }
    /**
     * Update a product
     * Update an existing product by ID.
     * @param id
     * @param requestBody
     * @returns Product Product updated successfully
     * @throws ApiError
     */
    public static updateProduct(
        id: number,
        requestBody: Product,
    ): CancelablePromise<Product> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/products/{id}',
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
     * Delete a product
     * Delete a specific product by ID.
     * @param id
     * @returns any Product deleted successfully
     * @throws ApiError
     */
    public static deleteProduct(
        id: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/products/{id}',
            path: {
                'id': id,
            },
            errors: {
                400: `Bad request`,
            },
        });
    }
}
