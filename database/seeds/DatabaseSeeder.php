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
        DB::table('teams')->insert(['name' => 'Grupo 1']);
        DB::table('teams')->insert(['name' => 'Grupo 2']);
        DB::table('teams')->insert(['name' => 'Grupo 3']);
        DB::table('teams')->insert(['name' => 'Grupo 4']);
        DB::table('teams')->insert(['name' => 'Grupo 5']);
        DB::table('teams')->insert(['name' => 'Grupo 6']);
        DB::table('teams')->insert(['name' => 'Grupo 7']);
        DB::table('teams')->insert(['name' => 'Grupo 8']);
        DB::table('teams')->insert(['name' => 'Grupo 9']);
        DB::table('teams')->insert(['name' => 'Grupo 10']);
        DB::table('teams')->insert(['name' => 'Grupo 11']);
        DB::table('teams')->insert(['name' => 'Grupo 12']);
        DB::table('teams')->insert(['name' => 'Grupo 13']);
        DB::table('teams')->insert(['name' => 'Grupo 14']);
        DB::table('teams')->insert(['name' => 'Grupo 15']);
        DB::table('teams')->insert(['name' => 'Grupo 16']);
    }
}
