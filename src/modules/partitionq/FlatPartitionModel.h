/* === This file is part of Calamares - <https://calamares.io> ===
 *
 *   SPDX-FileCopyrightText: 2022 Aditya Mehra <aix.m@outlook.com>
 *   SPDX-License-Identifier: GPL-3.0-or-later
 *
 *   Calamares is Free Software: see the License-Identifier above.
 *
 */

#ifndef FLATPARTITIONMODEL_H
#define FLATPARTITIONMODEL_H

#include <QAbstractListModel>
#include <QObject>
#include <QStringList>

class PartitionModel;

// Flatten the PartionModel.
// This is used by the QML frontend to display the partition table.
class PartitionListModel : public QAbstractListModel
{
    Q_OBJECT
public:
    explicit PartitionListModel( PartitionModel* model, QObject* parent = nullptr );

    int rowCount( const QModelIndex& parent = QModelIndex() ) const override;
    QVariant data( const QModelIndex& index, int role = Qt::DisplayRole ) const override;
    QHash< int, QByteArray > roleNames() const override;

    Q_INVOKABLE QVariantMap get( int row ) const;

    QModelIndex mapToSource( const QModelIndex& index ) const;

private:
    PartitionModel* m_model;
};

#endif // FLATPARTITIONMODEL_H
