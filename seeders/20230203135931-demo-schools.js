'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Schools', [
      {
        name: 'SMKN 1 Kota Tasikmalaya',
        teacher: 'Tsunade',
        address: 'Jl. Mancogeh No.26, Nagarasari, Kec. Cipedes, Kota Tasikmalaya, Jawa Barat 46132',
        status: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        name: 'SMKN 2 Kota Tasikmalaya',
        teacher: 'Jiraiya',
        address: 'Jl. Noenoeng Tisnasaputra, Kahuripan, Kec. Tawang, Kota Tasikmalaya, Jawa Barat 46115',
        status: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        name: 'SMKN 2 Ciamis',
        teacher: 'Minato',
        address: 'Jl. Sadananya No.21, Maleber, Kec. Ciamis, Kabupaten Ciamis, Jawa Barat 46214',
        status: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        name: 'SMAN 1 Singaparna',
        teacher: 'Orochi',
        address: 'Jl. Perikanan Darat, Cipakat, Kec. Singaparna, Kabupaten Tasikmalaya, Jawa Barat 46416',
        status: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Schools', null, {});
  }
};
