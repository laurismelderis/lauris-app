'use client'
import { useEffect } from 'react'

import html2canvas from 'html2canvas'
import { jsPDF } from 'jspdf'
import { colors } from '@/tailwind.config'

function hexToRgb(hex: string): { r: number; g: number; b: number } {
  // Remove the "#" if present
  hex = hex.replace(/^#/, '')

  // Support shorthand hex like "#fc0" → "#ffcc00"
  if (hex.length === 3) {
    hex = hex
      .split('')
      .map((char) => char + char)
      .join('')
  }

  if (hex.length !== 6) {
    throw new Error('Invalid hex color')
  }

  const r = parseInt(hex.slice(0, 2), 16)
  const g = parseInt(hex.slice(2, 4), 16)
  const b = parseInt(hex.slice(4, 6), 16)

  return { r, g, b }
}

const downloadPDF = async () => {
  // const element = document.body // Or a specific element (e.g., document.getElementById('pdf-content'))
  const element = document.getElementById('lauris-cv')

  if (!element) return

  const canvas = await html2canvas(element, {
    scale: 2, // Higher quality
    scrollY: -window.scrollY, // Fix for full-page capture
    backgroundColor: colors['dark-green'],
  })

  const imgData = canvas.toDataURL('image/png')
  const imgProps = {
    width: canvas.width,
    height: canvas.height,
  }
  const pdf = new jsPDF('p', 'mm', 'a4', true)

  const pdfWidth = pdf.internal.pageSize.getWidth()
  const pdfHeight = pdf.internal.pageSize.getHeight()

  // Convert px to mm
  const pxPerMm = imgProps.width / pdfWidth
  const imgHeightMm = imgProps.height / pxPerMm

  let heightLeft = imgHeightMm
  let position = 0

  const { r, g, b } = hexToRgb(colors['dark-green'])

  // Add first page
  pdf.setFillColor(r, g, b)
  pdf.rect(0, 0, pdfWidth, pdfHeight, 'F')
  pdf.addImage(imgData, 'PNG', 0, position, pdfWidth, imgHeightMm)
  heightLeft -= pdfHeight

  // Add more pages if needed
  while (heightLeft > 0) {
    position = heightLeft - imgHeightMm
    pdf.addPage()
    pdf.addImage(imgData, 'PNG', 0, position, pdfWidth, imgHeightMm)
    heightLeft -= pdfHeight
  }

  pdf.save('page.pdf')
}

const DownloadPdf = () => {
  useEffect(() => {
    downloadPDF()
  }, [])

  return <div />
}

export default DownloadPdf
