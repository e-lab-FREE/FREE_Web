# Generated by Django 3.2.9 on 2022-02-17 14:57

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('free', '0017_auto_20220217_1554'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Experiment',
            new_name='ApparatusType',
        ),
        migrations.AlterModelOptions(
            name='apparatustype',
            options={'ordering': ['name'], 'verbose_name': 'ApparatusType', 'verbose_name_plural': 'Apparatus types'},
        ),
    ]
