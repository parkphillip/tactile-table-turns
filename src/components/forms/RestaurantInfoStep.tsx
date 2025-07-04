import React from 'react';
import { FormData, US_STATES } from '@/types/FormData';

interface RestaurantInfoStepProps {
  formData: FormData;
  onInputChange: (field: keyof FormData, value: string) => void;
  errors?: string[];
}

const RestaurantInfoStep: React.FC<RestaurantInfoStepProps> = ({
  formData,
  onInputChange,
  errors = []
}) => {
  const hasError = (fieldErrors: string[], fieldName: string) => {
    return fieldErrors.some(error => error.toLowerCase().includes(fieldName.toLowerCase()));
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <label htmlFor="restaurantName" className="form-label">
          What's your restaurant called? *
        </label>
        <input
          id="restaurantName"
          type="text"
          required
          value={formData.restaurantName}
          onChange={(e) => onInputChange('restaurantName', e.target.value)}
          className={`form-input ${hasError(errors, 'restaurant') ? 'border-red-500 bg-red-50' : ''}`}
          placeholder="e.g., Mario's Italian Kitchen"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="address" className="form-label">
            Street Address *
          </label>
          <input
            id="address"
            type="text"
            required
            value={formData.address}
            onChange={(e) => onInputChange('address', e.target.value)}
            className={`form-input ${hasError(errors, 'address') ? 'border-red-500 bg-red-50' : ''}`}
            placeholder="123 Main Street"
          />
        </div>
        <div>
          <label htmlFor="city" className="form-label">
            City *
          </label>
          <input
            id="city"
            type="text"
            required
            value={formData.city}
            onChange={(e) => onInputChange('city', e.target.value)}
            className={`form-input ${hasError(errors, 'city') ? 'border-red-500 bg-red-50' : ''}`}
            placeholder="Your wonderful city"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="state" className="form-label">
            State *
          </label>
          <select
            id="state"
            required
            value={formData.state}
            onChange={(e) => onInputChange('state', e.target.value)}
            className={`form-input ${hasError(errors, 'state') ? 'border-red-500 bg-red-50' : ''}`}
          >
            <option value="">Select a state</option>
            {US_STATES.map((state) => (
              <option key={state.value} value={state.value}>
                {state.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="zipCode" className="form-label">
            Zip Code *
          </label>
          <input
            id="zipCode"
            type="text"
            required
            value={formData.zipCode}
            onChange={(e) => onInputChange('zipCode', e.target.value)}
            className={`form-input ${hasError(errors, 'zip') ? 'border-red-500 bg-red-50' : ''}`}
            placeholder="12345"
          />
        </div>
      </div>
    </div>
  );
};

export default RestaurantInfoStep;
