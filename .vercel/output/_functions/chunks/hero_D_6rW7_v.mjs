const hero = new Proxy({"src":"/_astro/hero.vvocfCyh.png","width":1024,"height":1024,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/super/Documents/techtots/src/assets/hero.png";
							}
							
							return target[name];
						}
					});

export { hero as default };
