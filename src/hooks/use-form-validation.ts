"use client"

import { useState } from "react"
import { z } from "zod"

export function useFormValidation<T extends z.ZodSchema>(schema: T) {
	const [errors, setErrors] = useState<Record<string, string>>({})
	const [isSubmitting, setIsSubmitting] = useState(false)

	const validate = (data: unknown): data is z.infer<T> => {
		try {
			schema.parse(data)
			console.log(data)
			setErrors({})
			return true
		} catch (error) {
			if (error instanceof z.ZodError) {
				const fieldErrors: Record<string, string> = {}
				if (Array.isArray(error.errors)) {
					error.errors.forEach((err) => {
						if (err.path.length > 0) {
							fieldErrors[err.path[0] as string] = err.message
						}
					})
				}
				setErrors(fieldErrors)
			}
			return false
		}
	}

	const clearError = (field: string) => {
		setErrors((prev) => {
			const newErrors = { ...prev }
			delete newErrors[field]
			return newErrors
		})
	}

	const clearAllErrors = () => {
		setErrors({})
	}

	return {
		errors,
		isSubmitting,
		setIsSubmitting,
		validate,
		clearError,
		clearAllErrors,
	}
}
