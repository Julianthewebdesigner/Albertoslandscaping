import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '../emailConfig';

export interface LeadFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  city: string;
  message: string;
  time: string;
}

/**
 * Sends a lead submission email via EmailJS
 * @param formData - The lead form data matching EmailJS template variables
 * @returns Promise that resolves when email is sent successfully
 * @throws Error if EmailJS submission fails
 */
export async function sendLeadEmail(formData: LeadFormData): Promise<void> {
  try {
    await emailjs.send(
      EMAILJS_CONFIG.serviceId,
      EMAILJS_CONFIG.templateId,
      formData,
      EMAILJS_CONFIG.publicKey
    );
  } catch (error) {
    console.error('EmailJS Error:', error);
    throw new Error('Failed to send email. Please try again or call us directly.');
  }
}

/**
 * Extracts form data from a form element and returns it in EmailJS format
 * @param form - The HTML form element
 * @param defaultService - Optional default service value if not in form
 * @returns LeadFormData object ready for EmailJS
 */
export function extractFormData(
  form: HTMLFormElement,
  defaultService?: string
): LeadFormData {
  const formData = new FormData(form);

  return {
    name: (formData.get('name') as string) || '',
    email: (formData.get('email') as string) || '',
    phone: (formData.get('phone') as string) || '',
    service: (formData.get('service') as string) || defaultService || '',
    city: (formData.get('city') as string) || '',
    message: (formData.get('message') as string) || '',
    time: (formData.get('time') as string) || 'anytime',
  };
}
