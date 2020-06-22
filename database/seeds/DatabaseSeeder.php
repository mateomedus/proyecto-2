<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        DB::table('teams')->insert(['name' => 'River']);
        DB::table('teams')->insert(['name' => 'Cruzeiro']);
        DB::table('teams')->insert(['name' => 'LDU']);
        DB::table('teams')->insert(['name' => 'Olimpia']);
        DB::table('teams')->insert(['name' => 'Nacional']);
        DB::table('teams')->insert(['name' => 'Internacional']);
        DB::table('teams')->insert(['name' => 'Athletico']);
        DB::table('teams')->insert(['name' => 'Boca Juniors']);
        DB::table('teams')->insert(['name' => 'Godoy Cruz']);
        DB::table('teams')->insert(['name' => 'Palmeiras']);
        DB::table('teams')->insert(['name' => 'San Lorenzo']);
        DB::table('teams')->insert(['name' => 'Cerro']);
        DB::table('teams')->insert(['name' => 'Emelec']);
        DB::table('teams')->insert(['name' => 'Flamenco']);
        DB::table('teams')->insert(['name' => 'Gremio']);
        DB::table('teams')->insert(['name' => 'Libertad']);
    }
}
