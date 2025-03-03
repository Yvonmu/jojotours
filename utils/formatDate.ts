// utils/formatDate.ts
export function formatDate(dateString?: string): string {
    const date = dateString ? new Date(dateString) : new Date();
    
    const options: Intl.DateTimeFormatOptions = {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    };
    
    return new Intl.DateTimeFormat('en-US', options).format(date);
  }
  