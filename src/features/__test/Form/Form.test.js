import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {Form} from '../../Forms/Form';

it('rendering and submitting a form', async () => {
  const handleSubmit = jest.fn();
  const handlePressInput = jest.fn();
  const setValue = jest.fn();
  const props = {
    value: 'test',
    setValue: setValue,
    handlePressInput: handlePressInput,
    onSubmit: handleSubmit,
  };

  render(<Form onSubmit={handleSubmit} {...props} />);
  
  const submitButton = screen.getByTestId('buttonSubmit'); 

  await waitFor(() => userEvent.click(submitButton));
  
  expect(handleSubmit).toHaveBeenCalledTimes(1);
});
