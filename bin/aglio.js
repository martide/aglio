#!/usr/bin/env node

process.title = 'aglio';

require('../lib/bin').run(undefined, function(err){
	if(err){
		process.exit(1);
	}
});
