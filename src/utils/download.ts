export const downloadEmoji = async (emoji, name, options) => {
  if (options.format === "png") {
    await downloadAsPNG(emoji, name, options.size);
  } else {
    await downloadAsSVG(emoji, name);
  }
};

const downloadAsPNG = async (emoji, name, size) => {
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("无法创建Canvas上下文");
  
  const fontSize = size * 0.8;
  ctx.font = `${fontSize}px serif`;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(emoji, size / 2, size / 2);
  
  const dataUrl = canvas.toDataURL("image/png");
  downloadFile(dataUrl, `${name}.png`);
};

const downloadAsSVG = async (emoji, name) => {
  const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100"><text x="50" y="50" font-size="80" text-anchor="middle" dominant-baseline="middle">${emoji}</text></svg>`;
  
  const blob = new Blob([svgContent], { type: "image/svg+xml" });
  const url = URL.createObjectURL(blob);
  downloadFile(url, `${name}.svg`);
  URL.revokeObjectURL(url);
};

const downloadFile = (url, filename) => {
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
