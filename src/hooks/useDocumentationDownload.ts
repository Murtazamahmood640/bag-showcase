import { useToast } from '@/hooks/use-toast';

export const useDocumentationDownload = () => {
  const { toast } = useToast();

  const downloadDocumentation = async () => {
    try {
      // Fetch the markdown documentation
      const response = await fetch('/BagBag_eProject_Report.md');
      const markdownContent = await response.text();

      // Dynamically import html2pdf
      const html2pdf = (await import('html2pdf.js')).default;

      // Convert markdown to HTML (basic conversion)
      const htmlContent = convertMarkdownToHtml(markdownContent);

      // Create a temporary container
      const container = document.createElement('div');
      container.innerHTML = htmlContent;
      container.style.padding = '40px';
      container.style.fontFamily = 'Georgia, serif';
      container.style.lineHeight = '1.6';
      container.style.maxWidth = '800px';
      container.style.margin = '0 auto';
      
      // Style the container for PDF
      document.body.appendChild(container);

      // Configure html2pdf options
      const options = {
        margin: [10, 10, 10, 10],
        filename: 'BagBag_eProject_Report.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
        pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
      };

      // Generate PDF
      await html2pdf().set(options).from(container).save();

      // Clean up
      document.body.removeChild(container);

      toast({
        title: "Documentation Downloaded!",
        description: "The eProject Report has been saved as PDF.",
      });
    } catch (error) {
      console.error('Error generating PDF:', error);
      toast({
        title: "Download Failed",
        description: "Failed to generate PDF. Please try again.",
        variant: "destructive",
      });
    }
  };

  return { downloadDocumentation };
};

// Basic markdown to HTML converter
function convertMarkdownToHtml(markdown: string): string {
  let html = markdown
    // Headers
    .replace(/^### (.*$)/gm, '<h3 style="color: #1a1a1a; margin-top: 20px; margin-bottom: 10px; font-size: 16px;">$1</h3>')
    .replace(/^## (.*$)/gm, '<h2 style="color: #1a1a1a; margin-top: 30px; margin-bottom: 15px; font-size: 20px; border-bottom: 1px solid #ddd; padding-bottom: 8px;">$1</h2>')
    .replace(/^# (.*$)/gm, '<h1 style="color: #1a1a1a; margin-bottom: 20px; font-size: 28px; text-align: center;">$1</h1>')
    // Bold
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    // Italic
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    // Code blocks
    .replace(/```(\w+)?\n([\s\S]*?)```/g, '<pre style="background: #f5f5f5; padding: 15px; border-radius: 5px; overflow-x: auto; font-size: 12px; margin: 15px 0;"><code>$2</code></pre>')
    // Inline code
    .replace(/`([^`]+)`/g, '<code style="background: #f0f0f0; padding: 2px 6px; border-radius: 3px; font-size: 13px;">$1</code>')
    // Horizontal rules
    .replace(/^---$/gm, '<hr style="border: none; border-top: 1px solid #ddd; margin: 30px 0;">')
    // Bullet points
    .replace(/^- (.*$)/gm, '<li style="margin-left: 20px; margin-bottom: 5px;">$1</li>')
    // Numbered lists
    .replace(/^\d+\. (.*$)/gm, '<li style="margin-left: 20px; margin-bottom: 5px;">$1</li>')
    // Paragraphs
    .replace(/\n\n/g, '</p><p style="margin-bottom: 15px;">')
    // Line breaks
    .replace(/\n/g, '<br>');

  return `<div style="color: #333;"><p style="margin-bottom: 15px;">${html}</p></div>`;
}
