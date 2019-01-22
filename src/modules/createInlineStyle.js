export default styleObj => Object.entries(styleObj)
    .map(([name, value]) => `${name}: ${value}`)
    .join('; ');
