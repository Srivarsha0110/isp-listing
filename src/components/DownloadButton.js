import React from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const DownloadButton = ({ elementId, fileName }) => {
  const handleDownload = () => {
    const input = document.getElementById(elementId);
    html2canvas(input).then(canvas => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      pdf.addImage(imgData, 'PNG', 0, 0);
      pdf.save(`${fileName}.pdf`);
    });
  };

  return <button onClick={handleDownload}>Download as PDF</button>;
};

export default DownloadButton;