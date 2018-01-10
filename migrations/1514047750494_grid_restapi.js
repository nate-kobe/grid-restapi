exports.up = (pgm) => {
	pgm.createTable('user_text', { 
		id : { type : 'serial', primaryKey : true }, 
		text : 'varchar(20)', 
		id_user : 'bigint'
	}, { ifNotExists : true });

};

exports.down = (pgm) => {
	pgm.dropTable('user_text', { ifExsts : true });
};
